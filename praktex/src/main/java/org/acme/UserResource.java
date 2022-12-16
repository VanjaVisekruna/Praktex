package org.acme;

import lombok.extern.slf4j.Slf4j;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Produces(MediaType.APPLICATION_JSON)
@Path("/users")
@Slf4j
public class UserResource {

    @POST
    @Transactional
    public void save(final User user) {
        user.persist();
    }

    @POST
    @Transactional
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    public void saveUser(final User user) {
        System.out.println(user.name);
        user.persist();

    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String abc(){
        return "hallo";
    }
}
