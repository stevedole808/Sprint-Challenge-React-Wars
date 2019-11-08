import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Pagination className="title" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

