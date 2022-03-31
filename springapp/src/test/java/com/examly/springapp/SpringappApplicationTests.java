package com.examly.springapp;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//import org.junit.Test;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
class SpringappApplicationTests {

	@Autowired
    private MockMvc mockMvc;
	
	@Test
	@Transactional
    public void BE_Add_Booking() throws Exception {
        String newBooking = "{\"bookingId\":\"Id001\",\"clientDetail\":\"client1\",\"BeauticianDetail\":\"beautician1\",\"lawfirmName\":\"testing\",\"date\":\"02.10.2021\",\"time\":\"02:30pm\",\"bookingStatus\":\"true\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/booking")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newBooking)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
	@Test
	@Transactional
    public void BE_Get_Beautician() throws Exception {
	 	mockMvc.perform(MockMvcRequestBuilders.get("/Beautician")
		.contentType(MediaType.APPLICATION_JSON)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_Add_Appointment() throws Exception {
        String newAppointment = "{\"AppointmentID\":\"AID001\",\"userId\":\"UID001\",\"date\":\"02.10.2021\",\"description\":\"pedicure\",\"issuedBy\":\"client1\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/Beautician/Appointment")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newAppointment)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_Update_Appointment() throws Exception {
        String newAppointment = "{\"AppointmentID\":\"AID001\",\"userId\":\"UID001\",\"date\":\"03.10.2021\",\"description\":\"pedicure\",\"issuedBy\":\"client1\"}";
        mockMvc.perform(MockMvcRequestBuilders.put("/Beautician/Appointment")
		.param("AppointmentID","AID001")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newAppointment)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
}