package com.cts.loan.service;

import com.cts.loan.model.Loan;
import com.cts.loan.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public Loan createLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public Optional<Loan> getLoanById(Long id) {
        return loanRepository.findById(id);
    }

    public Optional<Loan> getLoanByNumber(String loanNumber) {
        return loanRepository.findByLoanNumber(loanNumber);
    }

    public List<Loan> getLoansByCustomer(String customerName) {
        return loanRepository.findByCustomerName(customerName);
    }

    public Loan updateLoan(Long id, Loan updated) {
        Loan existing = loanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loan not found: " + id));
        existing.setLoanType(updated.getLoanType());
        existing.setLoanAmount(updated.getLoanAmount());
        existing.setOutstandingAmount(updated.getOutstandingAmount());
        existing.setStatus(updated.getStatus());
        return loanRepository.save(existing);
    }

    public void deleteLoan(Long id) {
        loanRepository.deleteById(id);
    }
}
