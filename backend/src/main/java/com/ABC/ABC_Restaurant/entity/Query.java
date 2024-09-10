package com.ABC.ABC_Restaurant.entity;

import jakarta.persistence.*;

@Entity
public class Query {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String senderName;
    private String query;
    private String senderEmail;
    private String replyToQuery;

    // Constructors
    public Query() {
    }

    public Query(String senderName, String query, String senderEmail, String replyToQuery) {
        this.senderName = senderName;
        this.query = query;
        this.senderEmail = senderEmail;
        this.replyToQuery = replyToQuery;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getSenderEmail() {
        return senderEmail;
    }

    public void setSenderEmail(String senderEmail) {
        this.senderEmail = senderEmail;
    }

    public String getReplyToQuery() {
        return replyToQuery;
    }

    public void setReplyToQuery(String replyToQuery) {
        this.replyToQuery = replyToQuery;
    }
}
