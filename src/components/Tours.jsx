import React from 'react'
import Title from './Title'
import { tours } from '../../data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section tours" id="tours">
       <Title title="featured" subTitle="tours" />
        <div className="section-center tours-center">
            {tours.map((tour)=> {
                return (
                    // <Tour key={tour.id} image={tour.image} date={tour.date} title={tour.title} info={tour.info} location={tour.location} duration={tour.duration} price={tour.duration} />   
                    <Tour key={tour.id} {... tour} />                  
                )
                }
                )
            }
        </div>
    </section>
  )
}

export default Tours    

