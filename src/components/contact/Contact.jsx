import React, { useRef, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loader, setLoader] = useState(false);
    console.log(import.meta.env.VITE_SERVICE_ID);


    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        console.log(formRef.current);


        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(() => {
                toast.success('Your email submitted successfully!');
                formRef.current.reset();
                setLoader(false);
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to send email. Please try again.');
                setLoader(false);
            });
    }

    return (
        <div id='contact' className='max-w-7xl mx-auto min-h-screen p-4 mt-16 lg:mt-0 flex flex-col items-center justify-center'>
            <h1 className='text-center text-4xl lg:text-5xl text-secondary font-bold mb-16'>Contact Me</h1>
            <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
                <aside className='space-y-6'>
                    <div className='bg-secondary-content rounded-xl p-4 flex items-center gap-4'>
                        <p><MdEmail className='text-3xl md:text-5xl text-primary' /></p>
                        <article className='space-y-2'>
                            <h2 className='text-xl lg:text-2xl font-semibold text-gray-200'>Email</h2>
                            <p className='text-lg text-gray-300'>mdnajmulhaque982@gmail.com</p>
                        </article>
                    </div>
                    <div className='bg-secondary-content rounded-xl p-4 flex items-center gap-4'>
                        <p><FaPhoneFlip className='text-3xl md:text-5xl text-primary' /></p>
                        <article className='space-y-2'>
                            <h2 className='text-xl lg:text-2xl font-semibold text-gray-200'>Phone</h2>
                            <p className='text-lg text-gray-300'>+880 13136 25224</p>
                        </article>
                    </div>
                    <div className='bg-secondary-content rounded-xl p-4 flex items-center gap-4'>
                        <p><FaWhatsapp className='text-3xl md:text-5xl text-primary' /></p>
                        <article className='space-y-2'>
                            <h2 className='text-xl lg:text-2xl font-semibold text-gray-200'>WhatsApp</h2>
                            <p className='text-lg text-gray-300'>+880 13136 25224</p>
                        </article>
                    </div>
                    <div className='bg-secondary-content rounded-xl p-4 flex items-center gap-4'>
                        <p><CiLocationOn className='text-3xl md:text-5xl text-primary' /></p>
                        <article className='space-y-2'>
                            <h2 className='text-xl lg:text-2xl font-semibold text-gray-200'>Location</h2>
                            <p className='text-lg text-gray-300'>Rangpur, Bangladesh</p>
                        </article>
                    </div>
                </aside>

                {/* Form Section */}
                <aside className='bg-secondary-content p-6 rounded-xl space-y-6 md:space-y-8'>
                    <form ref={formRef} onSubmit={handleEmailSubmit} className='space-y-6'>
                        <input
                            type="email"
                            name="user_email"
                            placeholder='Enter Your email'
                            required
                            className='w-full outline-1 rounded-xl p-3 focus:outline-primary'
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder='Email Subject'
                            required
                            className='w-full outline-1 rounded-xl p-3 focus:outline-primary'
                        />
                        <textarea
                            name="message"
                            rows={6}
                            placeholder='Enter your message '
                            required
                            className='w-full outline-1 rounded-xl p-3 focus:outline-primary resize-none'
                        />
                        <input
                            type="submit"
                            value={loader ? 'Sending...' : 'Submit'}
                            className='btn btn-primary text-base-100 w-full rounded-xl p-2'
                        />
                    </form>
                </aside>
            </section>
            <ToastContainer />
        </div>
    );
};

export default Contact;
