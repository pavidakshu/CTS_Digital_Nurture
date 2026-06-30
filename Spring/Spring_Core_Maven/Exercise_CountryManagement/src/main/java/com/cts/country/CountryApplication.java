package com.cts.country;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class CountryApplication implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(CountryApplication.class, args);
    }

    @Override
    public void run(String... args) {
        Country india = new Country("India", "IN", "Asia");
        Country usa = new Country("United States", "US", "North America");
        Country germany = new Country("Germany", "DE", "Europe");

        countryService.addCountry(india);
        countryService.addCountry(usa);
        countryService.addCountry(germany);

        List<Country> allCountries = countryService.getAllCountries();
        System.out.println("All countries in db:");
        for (Country c : allCountries) {
            System.out.println(c);
        }

        countryService.getCountryByCode("IN")
                .ifPresent(c -> System.out.println("Found by code IN -> " + c));

        Country updated = new Country("Bharat", "IN", "Asia");
        countryService.updateCountry(india.getId(), updated);

        countryService.getCountryById(india.getId())
                .ifPresent(c -> System.out.println("After update -> " + c));

        countryService.deleteCountry(germany.getId());
        System.out.println("Count after deleting Germany: " + countryService.getAllCountries().size());
    }
}
