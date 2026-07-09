package com.cts.resthandson.controller;

import com.cts.resthandson.entity.CountryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/xml-country")
public class CountryBeanController {

    private final CountryBean countryBean;

    @Autowired
    public CountryBeanController(CountryBean countryBean) {
        this.countryBean = countryBean;
    }

    @GetMapping
    public CountryBean getXmlLoadedCountry() {
        return countryBean;
    }
}
