package com.cts.springboot;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class SpringBootMavenApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootMavenApplication.class, args);
    }
}

@Component
class StartupRunner implements CommandLineRunner {

    @Override
    public void run(String... args) {
        System.out.println("Spring Boot app is up and running, set up through Maven.");
    }
}
