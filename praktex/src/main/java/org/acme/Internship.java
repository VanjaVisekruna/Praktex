package org.acme;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "Internship")
@Getter
@Setter

public class Internship {
    @Id
    public UUID id;
    public String description;

    @ManyToOne(fetch = FetchType.LAZY)
    public User user;

    @ManyToOne(fetch = FetchType.LAZY)
    public InternshipType type;

    @ManyToOne(fetch = FetchType.LAZY)
    public SchoolType schoolType;

    @ManyToOne(fetch = FetchType.LAZY)
    public Category category;
}
