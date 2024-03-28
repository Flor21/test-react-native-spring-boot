package com.example.test.controller;

import com.example.test.model.TestModel;
import com.example.test.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/test")
@RequiredArgsConstructor
public class TestController {

    private final TestService testService;

    @GetMapping("/inicio")
    public ResponseEntity<TestModel> inicio() {
        TestModel testModel = testService.inicio();
        return ResponseEntity.ok()
                .body(testModel);
    }

    @GetMapping("/fin")
    public ResponseEntity<TestModel> fin() {
        TestModel testModel = testService.fin();
        return ResponseEntity.ok()
                .body(testModel);
    }

}
