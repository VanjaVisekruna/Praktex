package org.acme;

import lombok.extern.slf4j.Slf4j;

import javax.transaction.Transactional;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Produces(MediaType.APPLICATION_JSON)
@Path("users")
@Slf4j
public class UserResource {

    @POST
    @Transactional
    public void save(final User user) {
        user.persist();
    }
}
