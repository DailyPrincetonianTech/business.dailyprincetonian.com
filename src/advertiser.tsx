import React from 'react';
import { Rate } from './types/rate';

interface Props {
  rates: Rate[],
  setModal: (title: string, desc: string) => void,
  title: String,
}

const Advertiser: React.FC<Props> = (props: Props) => (
  <>
    {props.rates.map((rate) => (
      <div className="rates--card--container">
        <img
          src={rate.image_url}
          alt={rate.image_alt}
        />
        <div className={`rates--card ${rate.description === '' ? 'rates--card--noclick' : ''}`} onClick={() => { if (rate.description !== '') props.setModal(rate.title, rate.description); }}>
          <div className="rates--type">{rate.title}</div>
          {rate.units.map((unit) => (
            <div className="rates--subtype--container">
              <div className="rates--subtype">
                {unit.title}
                ...
              </div>
              <div className="rates--cost">{unit.price}</div>
            </div>
          ))}
          {rate.notes.map((note, index) => (
            <div className="asterisk">{'*'.repeat(index + 1) + note}</div>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default Advertiser;
