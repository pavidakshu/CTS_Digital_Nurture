package com.cts.loan.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String loanNumber;
    private String loanType;
    private String customerName;
    private Double loanAmount;
    private Double outstandingAmount;
    private String status;

    public Loan() {
    }

    public Loan(String loanNumber, String loanType, String customerName, Double loanAmount, Double outstandingAmount, String status) {
        this.loanNumber = loanNumber;
        this.loanType = loanType;
        this.customerName = customerName;
        this.loanAmount = loanAmount;
        this.outstandingAmount = outstandingAmount;
        this.status = status;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getLoanNumber() { return loanNumber; }
    public void setLoanNumber(String loanNumber) { this.loanNumber = loanNumber; }

    public String getLoanType() { return loanType; }
    public void setLoanType(String loanType) { this.loanType = loanType; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public Double getLoanAmount() { return loanAmount; }
    public void setLoanAmount(Double loanAmount) { this.loanAmount = loanAmount; }

    public Double getOutstandingAmount() { return outstandingAmount; }
    public void setOutstandingAmount(Double outstandingAmount) { this.outstandingAmount = outstandingAmount; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
