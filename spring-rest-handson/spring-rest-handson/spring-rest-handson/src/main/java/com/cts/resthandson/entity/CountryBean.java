package com.cts.resthandson.entity;

public class CountryBean {

    private String countryCode;
    private String countryName;
    private String capital;

    public CountryBean() {
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getCapital() {
        return capital;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    @Override
    public String toString() {
        return countryCode + " - " + countryName + " - " + capital;
    }
}
