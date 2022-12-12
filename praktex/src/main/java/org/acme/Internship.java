package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "Internship")
@Getter
@Setter

public class Internship extends PanacheEntity {
    public String description;

    @ManyToOne(fetch = FetchType.LAZY)
    public User user;

    @ManyToOne(fetch = FetchType.LAZY)
    public InternshipType internshipType;

    @ManyToOne(fetch = FetchType.LAZY)
    public SchoolType schoolType;

    @ManyToOne(fetch = FetchType.LAZY)
    public Category category;
}
