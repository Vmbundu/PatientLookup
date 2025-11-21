package com.example.demo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
public class Info {
    private String name;
    private int id;
    private int age;
    private String pressure;
    private int chol;

    
}