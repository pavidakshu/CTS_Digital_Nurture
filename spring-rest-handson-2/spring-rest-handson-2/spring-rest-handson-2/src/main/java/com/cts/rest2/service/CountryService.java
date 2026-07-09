package com.cts.rest2.service;

import com.cts.rest2.entity.Country;
import com.cts.rest2.exception.CountryNotFoundException;
import com.cts.rest2.repository.CountryRepository;
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
                .orElseThrow(() -> new CountryNotFoundException("Country not found with id: " + id));
    }

    public Country getCountryByCode(String countryCode) {
        return countryRepository.findByCountryCode(countryCode)
                .orElseThrow(() -> new CountryNotFoundException("Country not found with code: " + countryCode));
    }

    public Country updateCountry(Long id, Country details) {
        Country existing = getCountryById(id);
        existing.setCountryName(details.getCountryName());
        existing.setCapital(details.getCapital());
        return countryRepository.save(existing);
    }

    public void deleteCountry(Long id) {
        countryRepository.delete(getCountryById(id));
    }
}
