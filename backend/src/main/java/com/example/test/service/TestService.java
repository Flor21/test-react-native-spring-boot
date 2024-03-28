package com.example.test.service;

import com.example.test.model.TestModel;
import org.springframework.stereotype.Service;

@Service
public class TestService {

    public TestModel inicio() {
        return TestModel.builder()
                .estado("APP iniciada")
                .build();
    }

    public TestModel fin() {
        return TestModel.builder()
                .estado("Vuelva a iniciar la APP")
                .build();
    }
}
