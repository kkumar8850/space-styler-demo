import React, { useState } from 'react'
import Head from 'next/head'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Header from '@/components/Header/Header'
import { FaPhoneAlt, FaMailBulk } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import styles from '../styles/contact.module.css'
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import Footer from '@/components/Footer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const phoneRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

function ContactUs() {
  const [loading, setLoading] = useState(false)
  return (
    <div>
        <Head>
          <title>Contact Us</title>
            <meta name="description" content="We value your feedback, inquiries, and the opportunity to assist you. Please feel free to reach out to us using the contact information provided below or by filling out the contact form. We are here to answer your questions, provide assistance, and ensure that your experience with us is exceptional." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="keywords" content="Contact information, Get in touch, Reach out, Contact details, Contact form, Inquiry, Contact us form, Query, Service inquiry" />
            <meta name="author" content="Spacestyler" />
            <meta property="og:title" content="Space Styler | Transforming Spaces In Style" />
            <meta property="og:description" content="We value your feedback, inquiries, and the opportunity to assist you. Please feel free to reach out to us using the contact information provided below or by filling out the contact form. We are here to answer your questions, provide assistance, and ensure that your experience with us is exceptional." /> 
            <meta property="og:url" content="http://www.spacestyler.in" />
            <meta property="og:type" content="website" />
            <meta name="robots" content="index, follow" />
        </Head>
        <main>
          <Header active="contact-us" />
          <PageWrapper>
            <div className='container py-[30px]'>
              <div className='grid lg:grid-cols-7 sm:grid-cols-1 xs:grid-cols-1 gap-1'>
                <div className='lg:col-span-4'>
                  <div className=''>
                    <p className='text-3xl font-semibold text-center'>Do you have a query?</p>
                    <p className='text-lg mt-4 text-center'>Fill up the form and our team will get back to you within 24 hours.</p>
                    <ul className={`${styles.infoUl}`}>
                      <li className={styles.contactOuter}>
                        <div className={styles.contactInfo}>
                        <FaPhoneAlt className='mr-4'/>
                        <p> +91 7778885464</p>
                        </div>
                      </li>
                      <li className={styles.contactOuter}>
                        <div className={styles.contactInfo}>
                        <FaMailBulk className='mr-4'/>
                        <p>Spacestylerzia@gmail.com</p>
                        </div>
                      </li>
                      <li className={styles.contactOuter}>
                        <div className={styles.contactInfo}>
                        <MdLocationOn className='mr-4'/>
                        <p>Azad appartment, 
                            I P extension, New Delhi</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='lg:col-span-3'>
                  <div className={`${styles.contactForm} bg-primary`}>
                    <Formik
                      initialValues={{
                        fullName : '',
                        email : '', 
                        phone : '',
                        message : ''
                      }}
                      validationSchema={
                        Yup.object({
                          fullName : Yup.string().required('Required Field'),
                          email : Yup.string().required('Required Field'),
                          phone : Yup.string().matches(phoneRegex, "Invalid phone").required('Required Field'),
                          message : Yup.string().required('Required Field'),
                        })
                      }
                      onSubmit={async (values, { setSubmitting, resetForm}) => {
                        const data = {
                          name : values.fullName, email: values.email, phone : values.phone, message : values.message
                        }
                        setLoading(true)
                        const requestOptions = {
                          method : 'POST',
                          header : {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                          url : '/api/contact',
                          data
                        }
                        axios(requestOptions)
                        .then(()=> {
                          resetForm()
                          toast('You query has been submitted successfully', {
                            autoClose : 5000,
                            type : 'success'
                          })
                          setLoading(false)
                        })
                        .catch(error=> {
                          setLoading(false)
                          toast('Some error occured, please try after some time.', {
                            autoClose : 5000,
                            type : 'error'
                          })
                        })
                      }}
                    >
                    {({
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleSubmit,
                      isSubmitting
                    }) => (
                      <form onSubmit={handleSubmit} className="w-[100%]">
                        <div >
                          <div>
                            <formgroup className={styles.formgroup}>
                              {/* <label htmlFor='fullName' className={styles.label}>First Name</label> */}
                              <input
                                type="text"
                                name="fullName"
                                placeholder='Enter Full Name'
                                className={styles.input}
                                value={values.fullName}
                                onChange={handleChange}
                              />
                              {touched.fullName || errors.fullName ? (
                                <div className='text-[#c65353]'>{errors.fullName}</div>
                                ) : null}
                            </formgroup>
                          </div>
                          <div>
                          <formgroup className={styles.formgroup}>
                            {/* <label htmlFor='email' className={styles.label}>Email</label> */}
                            <input
                              type="text"
                              name="email"
                              placeholder='Enter Email'
                              className={styles.input}
                              value={values.email}
                                onChange={handleChange}
                            />
                            {touched.email && errors.email ? (
                                <div className='text-[#c65353]'>{errors.email}</div>
                                ) : null}
                          </formgroup>
                          </div>
                          <div>
                          <formgroup className={styles.formgroup}>
                            {/* <label htmlFor='phone' className={styles.label}>Phone Number</label> */}
                            <input
                              type="number"
                              name="phone"
                              placeholder='Enter Phone Number'
                              className={styles.input}
                              value={values.phone}
                                onChange={handleChange}
                            />
                            {touched.phone && errors.phone ? (
                                <div className='text-[#c65353]'>{errors.phone}</div>
                                ) : null}
                          </formgroup>
                          </div>
                          <div>
                            <formgroup className={styles.formgroup}>
                            {/* <label htmlFor='message' className={styles.label}>Message</label> */}
                            <input
                              type="text"
                              name="message"
                              placeholder='Enter Message'
                              className={styles.input}
                              value={values.message}
                                onChange={handleChange}
                            />
                            {touched.message && errors.message ? (
                                <div className='text-[#c65353]'>{errors.message}</div>
                                ) : null}
                          </formgroup>
                          </div>
                        </div>
                        <div className='lg:w-[50%] sm:w-[100%] mx-auto'>
                          <button 
                            className={loading ? styles.loadingButton : styles.submitButton} disabled={loading} type="submit">
                            {
                              loading
                              ?
                              "Submitting Data"
                              :
                            "Get Free Consultation"
                            }
                          </button>
                        </div>
                      </form>
                    )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </PageWrapper>
        </main>
        <ToastContainer />
        <Footer />
    </div>
  )
}

export default ContactUs