package com.cts.country;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class FindCountryApplication implements CommandLineRunner {

    @Autowired
    private CountryRepository countryRepository;

    public static void main(String[] args) {
        SpringApplication.run(FindCountryApplication.class, args);
    }

    @Override
    public void run(String... args) {
        countryRepository.save(new Country("India", "IN"));
        countryRepository.save(new Country("United States", "US"));
        countryRepository.save(new Country("Germany", "DE"));
        countryRepository.save(new Country("Japan", "JP"));

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter country code to search: ");
        String code = sc.next().toUpperCase();

        countryRepository.findByCountryCode(code)
                .ifPresentOrElse(
                        country -> System.out.println("Found -> " + country),
                        () -> System.out.println("No country found with code " + code)
                );
    }
}
