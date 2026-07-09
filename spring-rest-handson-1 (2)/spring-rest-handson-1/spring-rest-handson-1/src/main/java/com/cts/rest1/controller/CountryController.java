package com.cts.rest1.controller;

import com.cts.rest1.entity.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CountryController {

    private final Country country;

    @Autowired
    public CountryController(Country country) {
        this.country = country;
    }

    @GetMapping("/country")
    public Country getCountry() {
        return country;
    }
}
