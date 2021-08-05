import { Accreditations } from '~interfaces/accreditation'

export const accreditations: Accreditations = {
  education: [
    {
      institution: 'The University of Texas at Arlington',
      degree: 'Bachelor of Science (BS) in Information Systems',
      major: 'Information Systems',
      gpa: '3.41/4.0',
      issueDate: 'December 2015'
      // term: 'Spring 2014 - December 2015'
    },
    {
      institution: 'Texas Tech University',
      degree: 'N/A',
      major: 'Electrical and Electronics Engineering',
      gpa: '3.41/4.0',
      // issueDate: null,
      term: 'Fall 2011 - December 2013'
    }
  ],
  licenses: [
    {
      name: 'Microsoft 70-480: Programming in HTML5 with JS & CSS3',
      issuer: 'Microsoft',
      issueDate: 'April 2019',
      url: 'https://www.credly.com/badges/7bbfbe5b-9691-4bd4-9b1e-4eaf3d3c64a1/linked_in_profile'
    },
    {
      name: 'LFS171x: Blockchain for Business - An Introduction to Hyperledger Technologies',
      issuer: 'edX',
      issueDate: 'Sep 2018 - Expired Sep 2019',
      url: 'https://courses.edx.org/certificates/2f27e67f69d443bea7aa48ea101dc3dc'
    },
    {
      name: 'IBM Blockchain Foundation Developer',
      issuer: 'IBM',
      issueDate: 'Jan 2018',
      url: 'https://www.credly.com/badges/222dcc2e-f1f5-4258-b56e-e73fef7081c7/linked_in_profile'
    }
  ],
  otherLicenses: [
    {
      name: 'IBM Blockchain Essentials',
      issuer: 'IBM',
      issueDate: 'Jan 2018',
      url: 'https://www.credly.com/badges/bbe7b89c-e1a2-4ecc-8e0b-aa220c11c98c/linked_in_profile'
    },
    {
      name: 'Docker Essentials',
      issuer: 'IBM',
      issueDate: 'Feb 2018',
      url: 'https://www.credly.com/badges/e207f228-e4ae-4aee-92b8-f6fcb6c26b46/linked_i'
    }
  ]
}
