package com.cts.handson.repository;

import com.cts.handson.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CountryRepository extends JpaRepository<Country, Long> {

    Optional<Country> findByCountryCode(String countryCode);

    List<Country> findByCountryNameContainingIgnoreCase(String namePart);

    List<Country> findByPopulationGreaterThan(Long population);

    List<Country> findByCapitalIsNotNull();

    List<Country> findByCountryNameOrderByPopulationDesc(String countryName);

    @Query("select c from Country c where c.population between :min and :max")
    List<Country> findCountriesWithPopulationBetween(@Param("min") Long min, @Param("max") Long max);

    @Query("select c from Country c left join fetch c.states where c.countryCode = :countryCode")
    Optional<Country> findCountryWithStatesByCode(@Param("countryCode") String countryCode);

    @Query("select c.countryName from Country c where c.population > :population order by c.population desc")
    List<String> findCountryNamesAbovePopulation(@Param("population") Long population);

    @Query("select c from Country c where c.capital is null")
    List<Country> findCountriesWithoutCapital();

    @Query("update Country c set c.population = :population where c.countryCode = :countryCode")
    @Modifying
    int updatePopulationByCountryCode(@Param("countryCode") String countryCode, @Param("population") Long population);

    @Query(value = "select * from country where capital = :capital", nativeQuery = true)
    List<Country> findByCapitalNative(@Param("capital") String capital);

    @Query(value = "select count(*) from country", nativeQuery = true)
    long countAllCountriesNative();

    @Query(value = "select * from country order by population desc limit :limit", nativeQuery = true)
    List<Country> findTopCountriesByPopulationNative(@Param("limit") int limit);

    @Query(value = "select avg(population) from country", nativeQuery = true)
    Double findAveragePopulationNative();
}
