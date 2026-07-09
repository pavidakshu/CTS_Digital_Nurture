package com.cts.resthandson.service;

import com.cts.resthandson.entity.Country;
import com.cts.resthandson.exception.CountryNotFoundException;
import com.cts.resthandson.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private final CountryRepository countryRepository;

    @Autowired
    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
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

    public Country updateCountry(Long id, Country updatedDetails) {
        Country existing = getCountryById(id);
        existing.setCountryName(updatedDetails.getCountryName());
        existing.setCapital(updatedDetails.getCapital());
        return countryRepository.save(existing);
    }

    public void deleteCountry(Long id) {
        Country existing = getCountryById(id);
        countryRepository.delete(existing);
    }
}
