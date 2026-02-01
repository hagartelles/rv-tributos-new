'use client';

import SectionLayout from '@/ui/SectionLayout';
import FeedbackCard from './FeedbackCards';
import FeedbackSlider from '@/utils/Slider';
import { testimonials } from './feedbackData';
import FeedbacksSlider from './FeedbackSlider';

export default function Feedbacks() {

    const isCarousel = testimonials.length > 3;

    return (
        <SectionLayout className='bg-linear-to-b from-rv-white to-[#c4c4c4]' name='feedbacks' showWatermark={false}>
            <SectionLayout.Container>
                <SectionLayout.Header className='mb-10'>
                    <SectionLayout.Title>
                        Feedbacks
                    </SectionLayout.Title>

                    <SectionLayout.Subtitle>
                        dos nossos clientes
                    </SectionLayout.Subtitle>

                    <SectionLayout.GradientLine />
                </SectionLayout.Header>

                {/* CONTAINER GERAL */}
                <div className={` w-full mb-6 flex flex-col gap-6 ${isCarousel ? 'lg:block' : 'lg:flex lg:flex-row'}`}>

                    {isCarousel ? (
                        <>
                            {/* MOBILE: Lista normal (escondida no LG) */}
                            <div className="flex flex-col gap-6 lg:hidden">
                                {testimonials.map((testimonial) => (
                                    <FeedbackCard key={testimonial.id} data={testimonial} />
                                ))}
                            </div>

                            {/* DESKTOP: Slider (Visível apenas LG) */}
                            <div className="hidden lg:block">
                                <FeedbackSlider
                                    items={testimonials}
                                    renderItem={(testimonial) => <FeedbackCard data={testimonial} />}
                                />
                            </div>
                        </>
                    ) : (
                        // MODO ESTÁTICO (<= 3 itens)
                        testimonials.map((testimonial) => (
                            <FeedbackCard key={testimonial.id} data={testimonial} />
                        ))
                    )}
                </div>
            </SectionLayout.Container>
            <div className="w-full">
                <FeedbacksSlider />
            </div>
        </SectionLayout>
    );
}