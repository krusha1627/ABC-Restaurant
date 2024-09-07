package com.ABC.ABC_Restaurant.service.interfac;

import com.ABC.ABC_Restaurant.dto.LoginRequest;
import com.ABC.ABC_Restaurant.dto.Response;
import com.ABC.ABC_Restaurant.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}
