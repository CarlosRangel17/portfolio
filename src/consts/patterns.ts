/**
 *  Basic Email Pattern
 *  Requires: usename + '@' + domain
 *  and a '.' within domain
 *
 *  Accepts:
 *  carlos@email.com
 */
export const EMAIL = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i
