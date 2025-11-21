package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("*")
public class HelloController {

	@Autowired
	private InfoService infoService;

	@GetMapping("/")
	public String get() {
		return "Testing";
	}

	@GetMapping("/patients")
	public List<Info> getInfoList() {
		return infoService.getList();
	}

	@GetMapping("/patients/{id}")
	public Info getPatientInfo(@PathVariable int id) {
		return getIDIndex(infoService.getList(), id);
	}

	private Info getIDIndex(List<Info> infoList, int id){
		for (int i = 0; i < infoList.size(); i++)
            if (id == infoList.get(i).getId())
                return infoList.get(i);
		return null;
	}
	

}
