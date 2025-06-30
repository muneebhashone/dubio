# Early Access API Documentation

## Overview
The Early Access module allows users to sign up for early access to the platform with their email address.

## Base URL
`/early-access`

## Endpoints

### POST /signup
Sign up for early access with email address.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Validation:**
- `email`: Required, must be a valid email format

**Response (201 Created):**
```json
{
  "message": "Successfully signed up for early access! Check your email for confirmation.",
  "data": {
    "email": "user@example.com",
    "status": "pending",
    "createdAt": "2025-06-30T10:30:00.000Z"
  }
}
```

**Response Fields:**
- `email`: The registered email address
- `status`: Signup status (`pending` or `confirmed`)
- `createdAt`: Timestamp when signup was created

**Error Responses:**
- `400 Bad Request`: Invalid email format
- `409 Conflict`: Email already registered
- `500 Internal Server Error`: Server error

**Features:**
- Automatic confirmation email sent via queue system
- Duplicate email prevention with unique constraint
- Status tracking (pending/confirmed)

## Data Model
```typescript
interface EarlyAccess {
  email: string;
  status: 'pending' | 'confirmed';
  confirmedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```