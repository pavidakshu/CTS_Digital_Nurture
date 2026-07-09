package com.cts.rest1.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource("classpath:country-config.xml")
public class AppConfig {
}
