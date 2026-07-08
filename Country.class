package com.cts.handson.controller;

import com.cts.handson.entity.Country;
import com.cts.handson.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/countries")
public class CountryController {

    private final CountryService countryService;

    @Autowired
    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @PostMapping
    public ResponseEntity<Country> addCountry(@RequestBody Country country) {
        Country saved = countryService.addCountry(country);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/{id}")
    public Country getCountryById(@PathVariable Long id) {
        return countryService.getCountryById(id);
    }

    @GetMapping("/code/{countryCode}")
    public Country getCountryByCode(@PathVariable String countryCode) {
        return countryService.getCountryByCode(countryCode);
    }

    @GetMapping("/search")
    public List<Country> searchByName(@RequestParam String name) {
        return countryService.searchByName(name);
    }

    @GetMapping("/population/above")
    public List<Country> getCountriesAbovePopulation(@RequestParam Long value) {
        return countryService.getCountriesAbovePopulation(value);
    }

    @GetMapping("/with-capital")
    public List<Country> getCountriesWithCapital() {
        return countryService.getCountriesWithCapital();
    }

    @GetMapping("/population/range")
    public List<Country> getCountriesInPopulationRange(@RequestParam Long min, @RequestParam Long max) {
        return countryService.getCountriesInPopulationRange(min, max);
    }

    @GetMapping("/code/{countryCode}/with-states")
    public Country getCountryWithStates(@PathVariable String countryCode) {
        return countryService.getCountryWithStates(countryCode);
    }

    @GetMapping("/names/population-above")
    public List<String> getCountryNamesAbovePopulation(@RequestParam Long value) {
        return countryService.getCountryNamesAbovePopulation(value);
    }

    @GetMapping("/without-capital")
    public List<Country> getCountriesWithoutCapital() {
        return countryService.getCountriesWithoutCapital();
    }

    @PutMapping("/code/{countryCode}/population")
    public int updatePopulation(@PathVariable String countryCode, @RequestParam Long value) {
        return countryService.updatePopulation(countryCode, value);
    }

    @GetMapping("/top-native")
    public List<Country> getTopCountriesByPopulationNative(@RequestParam(defaultValue = "5") int limit) {
        return countryService.getTopCountriesByPopulationNative(limit);
    }

    @GetMapping("/average-population-native")
    public Double getAveragePopulationNative() {
        return countryService.getAveragePopulationNative();
    }

    @GetMapping("/capital-native")
    public List<Country> getCountriesByCapitalNative(@RequestParam String capital) {
        return countryService.getCountriesByCapitalNative(capital);
    }

    @GetMapping("/count")
    public long countCountries() {
        return countryService.countCountries();
    }

    @PostMapping("/{countryCode}/states")
    public Country addState(@PathVariable String countryCode, @RequestParam String stateName) {
        return countryService.addStateToCountry(countryCode, stateName);
    }

    @PutMapping("/{id}")
    public Country updateCountry(@PathVariable Long id, @RequestBody Country country) {
        return countryService.updateCountry(id, country);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCountry(@PathVariable Long id) {
        countryService.deleteCountry(id);
        return ResponseEntity.noContent().build();
    }
}
