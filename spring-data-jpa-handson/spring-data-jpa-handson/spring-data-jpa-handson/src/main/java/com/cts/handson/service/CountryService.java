package com.cts.handson.service;

import com.cts.handson.entity.Country;
import com.cts.handson.entity.State;
import com.cts.handson.exception.CountryNotFoundException;
import com.cts.handson.repository.CountryRepository;
import com.cts.handson.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CountryService {

    private final CountryRepository countryRepository;
    private final StateRepository stateRepository;

    @Autowired
    public CountryService(CountryRepository countryRepository, StateRepository stateRepository) {
        this.countryRepository = countryRepository;
        this.stateRepository = stateRepository;
    }

    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Country getCountryById(Long id) {
        return countryRepository.findById(id)
                .orElseThrow(() -> new CountryNotFoundException("Country not found with id " + id));
    }

    public Country getCountryByCode(String countryCode) {
        return countryRepository.findByCountryCode(countryCode)
                .orElseThrow(() -> new CountryNotFoundException("Country not found with code " + countryCode));
    }

    public List<Country> searchByName(String namePart) {
        return countryRepository.findByCountryNameContainingIgnoreCase(namePart);
    }

    public List<Country> getCountriesAbovePopulation(Long population) {
        return countryRepository.findByPopulationGreaterThan(population);
    }

    public List<Country> getCountriesWithCapital() {
        return countryRepository.findByCapitalIsNotNull();
    }

    public List<Country> getCountriesInPopulationRange(Long min, Long max) {
        return countryRepository.findCountriesWithPopulationBetween(min, max);
    }

    public Country getCountryWithStates(String countryCode) {
        return countryRepository.findCountryWithStatesByCode(countryCode)
                .orElseThrow(() -> new CountryNotFoundException("Country not found with code " + countryCode));
    }

    public List<String> getCountryNamesAbovePopulation(Long population) {
        return countryRepository.findCountryNamesAbovePopulation(population);
    }

    public List<Country> getCountriesWithoutCapital() {
        return countryRepository.findCountriesWithoutCapital();
    }

    @Transactional
    public int updatePopulation(String countryCode, Long population) {
        return countryRepository.updatePopulationByCountryCode(countryCode, population);
    }

    public List<Country> getTopCountriesByPopulationNative(int limit) {
        return countryRepository.findTopCountriesByPopulationNative(limit);
    }

    public Double getAveragePopulationNative() {
        return countryRepository.findAveragePopulationNative();
    }

    public List<Country> getCountriesByCapitalNative(String capital) {
        return countryRepository.findByCapitalNative(capital);
    }

    public long countCountries() {
        return countryRepository.countAllCountriesNative();
    }

    @Transactional
    public Country addStateToCountry(String countryCode, String stateName) {
        Country country = getCountryByCode(countryCode);
        State state = new State(stateName);
        country.addState(state);
        countryRepository.save(country);
        return country;
    }

    public Country updateCountry(Long id, Country updatedDetails) {
        Country existing = getCountryById(id);
        existing.setCountryName(updatedDetails.getCountryName());
        existing.setCapital(updatedDetails.getCapital());
        existing.setPopulation(updatedDetails.getPopulation());
        return countryRepository.save(existing);
    }

    public void deleteCountry(Long id) {
        Country existing = getCountryById(id);
        countryRepository.delete(existing);
    }
}
