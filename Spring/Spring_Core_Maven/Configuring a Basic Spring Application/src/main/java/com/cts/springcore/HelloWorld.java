package com.cts.springcore;

public class HelloWorld {

    private String message;

    public HelloWorld() {
        System.out.println("HelloWorld bean created by the Spring IoC Container.");
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void printMessage() {
        System.out.println("Your Message : " + message);
    }
}
