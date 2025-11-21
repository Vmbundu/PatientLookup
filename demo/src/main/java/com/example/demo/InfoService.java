package com.example.demo;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class InfoService {
        List<Info> info;

        public InfoService(){
            info = List.of( new Info("Jane Doe", 1000, 30,"Medium",156),
                new Info("John Doe", 1001, 33,"High",120),
                new Info("Mickey Doe", 1002, 13,"Low",100));
        }

        public List<Info> getList(){
            return info;
        }
}
