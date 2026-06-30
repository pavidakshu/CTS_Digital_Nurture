package com.cts.springcore;

public class Student {

    private int rollNumber;
    private String name;   
    private final Address address;

    public Student(Address address) {
        this.address = address;
        System.out.println("Student created with constructor-injected Address.");
    }

    public void setRollNumber(int rollNumber) {
        this.rollNumber = rollNumber;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void printDetails() {
        System.out.println("Roll Number : " + rollNumber);
        System.out.println("Name        : " + name);
        System.out.println("Address     : " + address);
    }
}
