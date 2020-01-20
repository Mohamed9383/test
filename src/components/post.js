import React from 'react';
import { Link } from "react-router-dom";
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function post({post}) {
  return (
    <div className="profileDetail">
      <Card>
       
        <CardBody>
          <CardTitle>{post.title} </CardTitle>
          <CardSubtitle>{post.body} </CardSubtitle>
          
          <Link to={`/comments/${post.id}`}>
            <Button>Commentaire</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

