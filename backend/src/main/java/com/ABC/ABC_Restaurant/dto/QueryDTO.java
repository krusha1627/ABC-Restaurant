package com.ABC.ABC_Restaurant.dto;

public class QueryDTO {

    private String replyToQuery;

    // Default constructor
    public QueryDTO() {
    }

    // Constructor with parameters
    public QueryDTO(String replyToQuery) {
        this.replyToQuery = replyToQuery;
    }

    // Getter and Setter
    public String getReplyToQuery() {
        return replyToQuery;
    }

    public void setReplyToQuery(String replyToQuery) {
        this.replyToQuery = replyToQuery;
    }
}
