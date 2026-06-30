package com.cts.country;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Optional<Country> getCountryById(Long id) {
        return countryRepository.findById(id);
    }

    public Optional<Country> getCountryByCode(String countryCode) {
        return countryRepository.findByCountryCode(countryCode);
    }

    public Country updateCountry(Long id, Country updatedCountry) {
        Country existing = countryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Country not found with id " + id));

        existing.setCountryName(updatedCountry.getCountryName());
        existing.setCountryCode(updatedCountry.getCountryCode());
        existing.setContinent(updatedCountry.getContinent());

        return countryRepository.save(existing);
    }

    public void deleteCountry(Long id) {
        countryRepository.deleteById(id);
    }
}
