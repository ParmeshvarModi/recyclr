package com.java.recyclebank.services;

import com.java.recyclebank.dto.LoginOutputDTO;
import com.java.recyclebank.models.User;
import com.java.recyclebank.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /*
    * @param username
    *
    * Return a User object if any user is available with that username
    * */
    public User findByEmail(String email)
    {
        return userRepository.findByEmail(email).orElse(new User());
    }

    /*
     * @param id
     *
     * Return a User object if any user is available with that id
     * */
    public User findById(String id)
    {
        return userRepository.findById(id).orElse(new User());
    }

    /**
     * 
     * @param newUser
     * @return LoginOutputDTO
     */
    public LoginOutputDTO addNewUser(User newUser)
    {
        LoginOutputDTO loginOutputDTO = new LoginOutputDTO();
        newUser.setAccessToken(generateAccessToekn());
        userRepository.save(newUser);
        if(userRepository.findById(newUser.getId()).isPresent())
        {
            newUser.setPassword(null);
            loginOutputDTO.setMessage("Logged in successfully");
            loginOutputDTO.setSuccess(true);
            loginOutputDTO.setAccess_token(newUser.getAccessToken());
            loginOutputDTO.setUser(newUser);
        }
        return loginOutputDTO;
    }

    /**
     * 
     * @param user
     * @return LoginOutputDTO
     */
    public LoginOutputDTO login(User user)
    {
        LoginOutputDTO loginOutputDTO = new LoginOutputDTO();
        if(userRepository.findByEmail(user.getEmail()).isPresent())
        {
            User userFromDatabase = userRepository.findByEmail(user.getEmail()).get();
            if(userFromDatabase.getPassword().equals(user.getPassword()))
            {
                userFromDatabase.setAccessToken(generateAccessToekn());
                userRepository.save(userFromDatabase);
                userFromDatabase.setPassword(null);
                loginOutputDTO.setMessage("Logged in successfully");
                loginOutputDTO.setSuccess(true);
                loginOutputDTO.setAccess_token(userFromDatabase.getAccessToken());
                loginOutputDTO.setUser(userFromDatabase);
            }
            else
            {
                loginOutputDTO.setMessage("Password is not correct");
                loginOutputDTO.setAccess_token(null);
                loginOutputDTO.setSuccess(false);
            }
        }
        else
        {
            loginOutputDTO.setMessage("Username is not correct");
            loginOutputDTO.setAccess_token(null);
            loginOutputDTO.setSuccess(false);
        }

        return loginOutputDTO;
    }


    /**
     * 
     * @param id
     * @return LoginOutputDTO
     */
    public LoginOutputDTO logout(String id)
    {
        User loggedInUser = userRepository.findById(id).get();
        loggedInUser.setAccessToken(null);
        LoginOutputDTO loginOutputDTO = new LoginOutputDTO();
        loginOutputDTO.setMessage("Logged out successfully");
        return loginOutputDTO;
    }

    /**
     * 
     * @param id
     * @param token
     * @return boolean
     */

    public boolean verifyToken(String id, String token)
    {
        return userRepository.findById(id).get().getAccessToken().equals(token);
    }

    /**
     * 
     * @return String
     */
    public String generateAccessToekn()
    {
        return "jgjeargrfffreaaer.gfrgarevg.wevweer"+ UUID.randomUUID().toString().replace("-","");
    }
}
