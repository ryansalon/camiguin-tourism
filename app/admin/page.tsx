"use client";

import { Container, Table, Button, Badge } from 'react-bootstrap';
import { destinations } from '@/data/destinations';

export default function AdminPage() {
  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Admin Dashboard</h1>
        <Button variant="success">+ Add New Destination</Button>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <Table responsive hover className="mb-0">
            <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map(dest => (
                <tr key={dest.id}>
                  <td className="fw-bold">{dest.name}</td>
                  <td><Badge bg="secondary">{dest.category}</Badge></td>
                  <td>{dest.rating}</td>
                  <td>{dest.address}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2">Edit</Button>
                    <Button variant="outline-danger" size="sm">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}
