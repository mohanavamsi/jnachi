# Security Spec

## 1. Data Invariants
- `users/{userId}`: Only the user with `userId` can read or write their own profile. PII isolation is enforced.
- `users/{userId}/scores/{scoreId}`: Only the owner (`userId`) can read or create scores. Users cannot modify or delete scores (append-only history).
- `users/{userId}/certifications/{certId}`: Only the owner can read, create, update, or delete their certifications.

## 2. Dirty Dozen Payloads
1. Create user profile with mismatched UID.
2. Read another user's profile.
3. Update user profile to inject role=admin.
4. Create a score for another user.
5. Create a score with missing required fields.
6. Create a score with an invalid level (not in enum).
7. Modify an existing score (should fail).
8. Delete a score (should fail).
9. Create certification with a 2MB title.
10. Update another user's certification.
11. Read another user's certification list.
12. Create profile without being authenticated.
