import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Header from '@/components/Header/Header'
import { FaPhoneAlt, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import styles from '../styles/contact.module.css'
import PageWrapper from '@/components/PageWrapper/PageWrapper'

function ContactUs() {

  return (
    <div>
        <Head>
          <title>Contact Us</title>
        </Head>
        <main>
          <Header active="contact-us" />
          <PageWrapper>
            <div className='container py-[30px]'>
              <div className='grid lg:grid-cols-6 sm:grid-cols-1 gap-8'>
                <div className='lg:col-start-1 lg:col-end-3 sm:col-start-1 sm:col-end-7'>
                  <p className='text-3xl font-semibold'>Do you have a query?</p>
                  <p className='text-lg mt-4'>Fill up the form and our team will get back to you within 24 hours.</p>
                  <ul className={styles.infoUl}>
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
                      <p>test location faridabad</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='lg:col-start-4 lg:col-end-7 sm:col-start-1 sm:col-end-7'>
                  <div className={styles.contactForm}>
                    <Formik
                      initialValues={{
                        firstname : '',
                        lastname : '',
                        email : '', 
                        phone : '',
                        message : ''
                      }}
                      validationSchema={
                        Yup.object({
                          firstname : Yup.string().required('Required Field'),
                          lastname : Yup.string().required('Required Field'),
                          email : Yup.string().required('Required Field'),
                          phone : Yup.string().required('Required Field'),
                          message : Yup.string().required('Required Field'),
                        })
                      }
                      onSubmit={async (values, { setSubmitting}) => {
                        const data = {
                          firstname : values.firstname, lastname : values.lastname, email: values.email, phone : values.phone, message : values.message
                        }
                        setSubmitting(true)
                        const requestOptions = {
                          method : 'POST',
                          header : {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                          body : JSON.stringify(data)
                        }
                        const response = await fetch('/api/contact', requestOptions)
                        const result = await response.json()
                        console.log('result', result)
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
                      <form onSubmit={handleSubmit}>
                        <div className='grid lg:grid-cols-2'>
                          <div>
                            <formgroup className={styles.formgroup}>
                              <label htmlFor='firstname' className={styles.label}>First Name</label>
                              <input
                                type="text"
                                name="firstname"
                                placeholder='Enter First Name'
                                className={styles.input}
                                value={values.firstname}
                                onChange={handleChange}
                              />
                              {touched.firstname || errors.firstname ? (
                                <div className='text-[red]'>{errors.firstname}</div>
                                ) : null}
                            </formgroup>
                          </div>
                          <div>
                          <formgroup className={styles.formgroup}>
                            <label htmlFor='lastname' className={styles.label}>Last Name</label>
                            <input
                              type="text"
                              name="lastname"
                              placeholder='Enter Last Name'
                              className={styles.input}
                              value={values.lastname}
                                onChange={handleChange}
                            />
                            {touched.lastname && errors.lastname ? (
                                <div className='text-[red]'>{errors.lastname}</div>
                                ) : null}
                          </formgroup>
                          </div>
                          <div>
                          <formgroup className={styles.formgroup}>
                            <label htmlFor='email' className={styles.label}>Email</label>
                            <input
                              type="text"
                              name="email"
                              placeholder='Enter Email'
                              className={styles.input}
                              value={values.email}
                                onChange={handleChange}
                            />
                            {touched.email && errors.email ? (
                                <div className='text-[red]'>{errors.email}</div>
                                ) : null}
                          </formgroup>
                          </div>
                          <div>
                          <formgroup className={styles.formgroup}>
                            <label htmlFor='phone' className={styles.label}>Phone Number</label>
                            <input
                              type="text"
                              name="phone"
                              placeholder='Enter Phone Number'
                              className={styles.input}
                              value={values.phone}
                                onChange={handleChange}
                            />
                            {touched.phone && errors.phone ? (
                                <div className='text-[red]'>{errors.phone}</div>
                                ) : null}
                          </formgroup>
                          </div>
                          <div className='col-span-2'>
                            <formgroup className={styles.formgroup}>
                            <label htmlFor='message' className={styles.label}>Message</label>
                            <textarea
                              type="text"
                              rows={4}
                              name="message"
                              placeholder='Enter Message'
                              className={styles.input}
                              value={values.message}
                                onChange={handleChange}
                            />
                            {touched.message && errors.message ? (
                                <div className='text-[red]'>{errors.message}</div>
                                ) : null}
                          </formgroup>
                          </div>
                        </div>
                        <div className='lg:w-[50%] sm:w-[100%] mx-auto'>
                          <button className={styles.submitButton} type="submit">
                            {
                              isSubmitting
                              ?
                              "Submitting Data"
                              :
                            "Get Free Consultation"
                            }
                          </button>
                        </div>
                        <div className='my-4 text-center relative h-[30px]'>
                          <hr className={styles.hr}/>
                          <p className={styles.dividerText}>or</p>
                        </div>
                        <div className='lg:w-[50%] sm:w-[100%] mx-auto mt-4'>
                          <Link 
                            href="https://wa.me/+917532098680"
                            target="_blank"
                            className={styles.whatsappChat}>
                              <FaWhatsapp className='mr-[10px] text-2xl'/>
                              Chat instantly on whatsapp
                          </Link>
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
    </div>
  )
}

export default ContactUs