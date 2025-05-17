import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../style/ProductDetail.css';
import product1 from '../assets/fisrt.png'; // Make sure to import the correct image
import product2 from '../assets/firstt.png';
import product3 from '../assets/secoend.png'; // Make sure to import the correct image
import product4 from '../assets/scoend.png'; // Make sure to import the correct image
import product5 from '../assets/third.png';
import product6 from '../assets/fourth.png';
import product7 from '../assets/fourth.jpeg';
import product8 from '../assets/fifth.png';
import product9 from '../assets/fifthh.png';
import product10 from '../assets/sixth.png';
import product11 from '../assets/seventh.png';
import product12 from '../assets/seventhh.png';
const productDetails = {
  1: {
    name: 'Automatic Tyre Inflator',
    image: product1,
    description: `Automatic Tyre Inflator / Deflator is a microprocessor-based system, using latest embedded technology 
    with inflation and deflation function. It is fully automatic and safe device to inflate tyres accurately to a 
    preset pressure. The unit is designed to use minimal compressed air thereby avoiding wastage of 
    compressed air. The system is absolutely weather proof, robust and elegant in design.`,
    specification: [
      'Accuracy: 1 PSI',
      'Range: 0 - 150 PSI',
      'Display: 1x1 inch Backlit LCD (702S), 2x1 inch Backlit LCD (702D)',
      'Resolution: 1 PSI',
      'Dimensions in mm: 250(h) x 270(w) x 120(d)',
      'Supply Voltage: 230v AC + 20v',
      'Weight: 5 Kgs (Approx.)',
    ],
    features: [
      'Increase / Decrease key on front panel for setting pressure.',
      'Change over switch to display in Kgs/sq.cm on front panel.',
      'Automatic setting of filling speed.',
      'Elegant design.',
      'Touch sensitive long-life keys.',
      'Key for back light control.',
      'Remote control unit (wireless) to set desired pressure. (Optional)',
      'Cabinet as per IP 65.',
    ],
  },
  2: {
    name: 'Automatic Tyre Inflator',
    image: product2,
    description: `Automatic Tyre Inflator / Deflator is a microprocessor-based system, using the latest embedded technology 
    with inflation and deflation functions. It is a fully automatic and safe device to inflate tyres accurately to a 
    preset pressure. The unit is designed to use minimal compressed air, thereby avoiding wastage. The system is 
    absolutely weatherproof, robust, and elegant in design.`,
    specification: [
      'Accuracy: 1 PSI',
      'Range: 0 - 150 PSI',
      'Display: 1x1 inch Backlit LCD (702S), 2x1 inch Backlit LCD (702D)',
      'Resolution: 1 PSI',
      'Dimensions in mm: 250(h) x 270(w) x 120(d)',
      'Supply Voltage: 230v AC + 20v',
      'Weight: 5 Kgs (Approx.)',
    ],
    features: [
      'Increase / Decrease key on front panel for setting pressure.',
      'Change over switch to display in Kgs/sq.cm on front panel.',
      'Automatic setting of filling speed.',
      'Elegant design.',
      'Touch-sensitive long-life keys.',
      'Key for backlight control.',
      'Remote control unit (wireless) to set desired pressure. (Optional)',
      'Cabinet as per IP 65.',
    ],

  },
  3: {
    name: 'Viking Oil Dispenser (Model: PT-VK04)',
    image: product3,
    description: `Viking Oil Dispenser is a microprocessor-based oil dispensing system. It is fully automatic and
    safe device to dispense oil accurately to a preset value. It is programmable to meet the changing
    needs. It avoids wastage of oil, which in turns saves money and high customer satisfaction. It is
    Electrically operated. All the operator has to do is set the predefined amount of oil to be dispensed
    and press the start key. The equipment automatically dispenses the predefined set amount of oil and
    beeps after the operation is over. The system can also be directly connected to the petrol dispensing
    nozzle.`,
    specification: [
      'Working Principle: Electrically',
      'Tank Capacity: 42 liters (Based on customer requirement)',
      'Dimensions: 710 (h) x 315 (w) x 570 (d) mm (Approx)',
      'Operating Pressure: 30 PSI',
      'Supply Voltage: 230 V AC',
      'Programmable keys: 5',
      'No. of Pumps: 1',
      'Display: 1 inch (for quantity, amount) 16 x 2 dot-matrix display (for programming and cumulative display)',
      'Accuracy: 0.01%',
    ],
    features: [
      'Digital Displays for Amount, Quantity and Cumulative',
      'Easy to use Preset keys to select oil quantity.',
      'UP / DOWN keys for setting / changing quantity.',
      'Touch sensitive long-life keys.',
      'Programmable cost of oil per liter.',
      'Display on both sides.',
    ],
  },
  4: {
    name: 'Viking Oil Dispenser (Model: PT-VK04)',
    image: product4,
    description: `Viking Oil Dispenser is a microprocessor-based oil dispensing system. It is fully automatic and
    safe device to dispense oil accurately to a preset value. It is programmable to meet the changing
    needs. It avoids wastage of oil, which in turns saves money and high customer satisfaction. It is
    Electrically operated. All the operator has to do is set the predefined amount of oil to be dispensed
    and press the start key. The equipment automatically dispenses the predefined set amount of oil and
    beeps after the operation is over. The system can also be directly connected to the petrol dispensing
    nozzle.`,
    specification: [
      'Working Principle: Electrically',
      'Tank Capacity: 42 liters (Based on customer requirement)',
      'Dimensions: 710 (h) x 315 (w) x 570 (d) mm (Approx)',
      'Operating Pressure: 30 PSI',
      'Supply Voltage: 230 V AC',
      'Programmable keys: 5',
      'No. of Pumps: 1',
      'Display: 1 inch (for quantity, amount) 16 x 2 dot-matrix display (for programming and cumulative display)',
      'Accuracy: 0.01%',
    ],
    features: [
      'Digital Displays for Amount, Quantity and Cumulative',
      'Easy to use Preset keys to select oil quantity.',
      'UP / DOWN keys for setting / changing quantity.',
      'Touch sensitive long-life keys.',
      'Programmable cost of oil per liter.',
      'Display on both sides.',
    ],
  },
  5: {
    name: 'Automatic Nitrogen Tyre Inflator',
    image: product5,
    description: `Introducing the Nitrogen Tyre Inflator, a cutting-edge solution designed to enhance tyre 
    performance and longevity. This advanced inflator utilizes Pressure Swing Adsorption (PSA) technology to generate high-purity nitrogen, ensuring consistent tyre pressure and improved fuel efficiency. By filling tyres with nitrogen, which is an inert, non-combustible gas, users benefit from reduced corrosion, slower diffusion rates, and stable tyre pressure even under varying temperatures. This results in extended tyre life, better comfort, and enhanced safety. 
    The inflator features a backlit LCD display, auto-vacumisation, and built-in counters for tyre top-up and fill, making it a reliable and user-friendly choice for maintaining optimal tyre conditions.`,
    specification: [
      'Power supply: 230V A.C 50 Hz',
      'Technology: PSA (Pressure Swing Adsorption)',
      'Tank Size: 60 Liters',
      'Keypad: Touch type',
      'Display: 2 x 1" LCD backlit Display (For Set and Tyre pressure)',
      'Purity of Nitrogen: 96 to 99.5%',
      'CMS: German Imported',
      'Resolution: 1 Psi',
      'Dimension: 1370 x 595 x 460 mm',
      'Pressure setting: 150 Psi',
      'Pre filter: 10 Microns',
      'Counters: Top Up & Tyre fill',
    ],
    features: [
      'High Nitrogen Purity',
      'LCD Display Backlit',
      'Auto-vacumisation',
      'PSA Technology',
      'Built-in tyre top-up and tyre fill counter',
      'Built-in nitrogen storage tank',
    ],
  },
  6: {
    name: 'Viking Oil Dispenser',
    image: product6,
    description: `Viking is a microprocessor-based dispenser, it consists of a metering equipment and a pump 
    which can be connected to a barrel. The pump is pneumatic operated. Suitable for dispensing engine oil, diesel oil, automatic transmission fluid, and anti-freeze/anti-boil, with a maximum viscosity of SAE 140.`,
    specification: [
      'Accuracy: +/-0.5% (of reading)',
      'Flow range: 1-30 liters/min',
      'Max. Pressure: 150psi',
      'Operating temp: -10° - 60°C',
      'Supply: 230V A.C 50 Hz',
      'Dimensions: 400mm x 320mm x 125mm',
      'Display: 4 X 1-inch Super Bright LED (LCD optional)',
      'Resolution: 0.1 liters',
    ],
    features: [
      'Uses oval gear meter for optimum accuracy',
      'There are five variable preset totals available for use',
      'Resettable barrel totalizer',
      'Six digits accumulative totalizer',
      'Non-drip nozzle',
    ],
  },
  7: {
    name: 'Viking Oil Dispenser',
    image: product7,
    description: `Viking is a microprocessor-based dispenser, it consists of a metering equipment and a pump 
    which can be connected to a barrel. The pump is pneumatic operated. Suitable for dispensing engine oil, diesel oil, automatic transmission fluid, and anti-freeze/anti-boil, with a maximum viscosity of SAE 140.`,
    specification: [
      'Accuracy: +/-0.5% (of reading)',
      'Flow range: 1-30 liters/min',
      'Max. Pressure: 150psi',
      'Operating temp: -10° - 60°C',
      'Supply: 230V A.C 50 Hz',
      'Dimensions: 400mm x 320mm x 125mm',
      'Display: 4 X 1-inch Super Bright LED (LCD optional)',
      'Resolution: 0.1 liters',
    ],
    features: [
      'Uses oval gear meter for optimum accuracy',
      'There are five variable preset totals available for use',
      'Resettable barrel totalizer',
      'Six digits accumulative totalizer',
      'Non-drip nozzle',
    ],
  },
  8: {
    name: 'Ad-Blue Dispenser / E-Disel Exhaust Fluid (DEF)',
    image: product8,
    description: `Fast, reliable, and accurate fuel dispensing is the minimum you can expect with Protech DEF Dispenser. 
    If you're searching for a quality AdBlue Dispenser, you’ll be happy to know that Protech has been at the forefront 
    of dispensing technology over 20 years, providing thousands of customers across India with quality Dispensers. 
    The system is a cloud-based system where you can remotely log into the cloud server to know your sales. 
    The system comes with a built-in storage tank of 220 Liters and can be installed in the forecourt.`,
    specification: [
      'Units of Measure: Liters',
      'Type of Fluid: AdBlue/Diesel Exhaust Fluid',
      'Voltage: 230 V, 50 Hz AC',
      'Flow Rate: 05-10 LPM',
      'Preset Volume: 000-999 Liters',
      'Display: 1" LCD with Backlit Amount',
      'Amount/Quantity: 000-999 Liters',
      'Key Pad: Feather Touch Type',
      'Built-in Storage Tank: 220 Liters (Lifetime warranted)',
      'Rate Changing: Password Protected/Web based',
      'Totalizer Reading: Yes',
      'Hose Length: 4 Meters',
      'Hose Management: Hook (Standard)',
      'Nozzle: Single with Auto Cut Off',
      'Printer: Optional',
      'IoT based DATA: Transfer Cycle Time: Every 1 Minute',
      'Security: Log in ID with Password',
      'Built-in Tank: 220 Liters with Low Level Alarm',
      'Working Temperature: -10°C to +55°C',
      'Relative Humidity: 5 to 95%',
      'Legal Metrology (W&M) Approved: Yes',
    ],
    features: [
      'Stainless Steel Finish: The dispenser comes with a stainless-steel finish.',
      'Cloud-Based System: The system is cloud-based, allowing remote monitoring of sales data.',
      'Built-in Storage Tank: The dispenser has a built-in storage tank of 220 liters.',
      'Warranty: The built-in storage tank is covered by a lifetime warranty.',
      'Optional Features: Printer',
    ],
    email: 'autowelt.infoserv@gmail.com',
    location: 'Mumbai, Maharashtra',
  },
  9: {
    name: 'E-Disel Exhaust Fluid (DEF)',
    image: product9,
    description: `Fast, reliable, and accurate fuel dispensing is the minimum you can expect with Protech DEF Dispenser. 
    If you're searching for a quality AdBlue Dispenser, you’ll be happy to know that Protech has been at the forefront 
    of dispensing technology over 20 years, providing thousands of customers across India with quality Dispensers. 
    The system is a cloud-based system where you can remotely log into the cloud server to know your sales. 
    The system comes with a built-in storage tank of 220 Liters and can be installed in the forecourt.`,
    specification: [
      'Units of Measure: Liters',
      'Type of Fluid: AdBlue/Diesel Exhaust Fluid',
      'Voltage: 230 V, 50 Hz AC',
      'Flow Rate: 05-10 LPM',
      'Preset Volume: 000-999 Liters',
      'Display: 1" LCD with Backlit Amount',
      'Amount/Quantity: 000-999 Liters',
      'Key Pad: Feather Touch Type',
      'Built-in Storage Tank: 220 Liters (Lifetime warranted)',
      'Rate Changing: Password Protected/Web based',
      'Totalizer Reading: Yes',
      'Hose Length: 4 Meters',
      'Hose Management: Hook (Standard)',
      'Nozzle: Single with Auto Cut Off',
      'Printer: Optional',
      'IoT based DATA: Transfer Cycle Time: Every 1 Minute',
      'Security: Log in ID with Password',
      'Built-in Tank: 220 Liters with Low Level Alarm',
      'Working Temperature: -10°C to +55°C',
      'Relative Humidity: 5 to 95%',
      'Legal Metrology (W&M) Approved: Yes',
    ],
    features: [
      'Stainless Steel Finish: The dispenser comes with a stainless-steel finish.',
      'Cloud-Based System: The system is cloud-based, allowing remote monitoring of sales data.',
      'Built-in Storage Tank: The dispenser has a built-in storage tank of 220 liters.',
      'Warranty: The built-in storage tank is covered by a lifetime warranty.',
      'Optional Features: Printer',
    ],
    email: 'autowelt.infoserv@gmail.com',
    location: 'Mumbai, Maharashtra',
  },
  10: {
    name: 'Ad-Blue Dispenser / E-Disel Exhaust Fluid (DEF)',
    image: product10,
    description: `Fast, reliable, and accurate fuel dispensing is the minimum you can expect with Protech DEF Dispenser. 
    If you're searching for a quality AdBlue Dispenser, you’ll be happy to know that Protech has been at the forefront 
    of dispensing technology over 20 years, providing thousands of customers across India with quality Dispensers. 
    The system is a cloud-based system where you can remotely log into the cloud server to know your sales. 
    The system comes with a built-in storage tank of 220 Liters and can be installed in the forecourt.`,
    specification: [
      'Units of Measure: Liters',
      'Type of Fluid: AdBlue/Diesel Exhaust Fluid',
      'Voltage: 230 V, 50 Hz AC',
      'Flow Rate: 05-10 LPM',
      'Preset Volume: 000-999 Liters',
      'Display: 1" LCD with Backlit Amount',
      'Amount/Quantity: 000-999 Liters',
      'Key Pad: Feather Touch Type',
      'Built-in Storage Tank: 220 Liters (Lifetime warranted)',
      'Rate Changing: Password Protected/Web based',
      'Totalizer Reading: Yes',
      'Hose Length: 4 Meters',
      'Hose Management: Hook (Standard)',
      'Nozzle: Single with Auto Cut Off',
      'Printer: Optional',
      'IoT based DATA: Transfer Cycle Time: Every 1 Minute',
      'Security: Log in ID with Password',
      'Built-in Tank: 220 Liters with Low Level Alarm',
      'Working Temperature: -10°C to +55°C',
      'Relative Humidity: 95% Max (Non-Condensing)',
      'Weight: 95 Kgs (Approx)',
    ],
    features: [
      'Cloud-based system for remote monitoring',
      'Feather touch keypad for ease of use',
      'Built-in tank with a low-level alarm',
      'High flow rate for fast dispensing',
      'Security features with login and password',
      'Optional printer for transaction records',
      'Nozzle with auto cut-off feature for safety',
      'IoT-based data transfer for real-time updates',
    ],
  },
  11: {
    name: 'Lubricated Air Compressor',
    image: product11,
    description: `The Lubricated Air Compressor service ensures high-quality and reliable air compression systems. The oil change process is conducted in front of the customer, offering transparency and fostering trust. The service is quick and designed to minimize customer wait time while maintaining high performance and efficiency. Only genuine BPCL-branded engine oils are used to ensure optimum quality and performance. In addition to oil changes, additional services like coolant checks and oil level top-ups are also available.`,
    specification: [
      'Convenience: Oil change process conducted in front of the customer to build trust.',
      'Speed: Designed to minimize customer wait time.',
      'Genuine Oil: Only BPCL-branded engine oils are used.',
      'Additional Services: Coolant and oil level checks and top-ups may be offered.',
    ],
    features: [
      'Transparent service process for customer trust',
      'Quick service to minimize wait time',
      'Only genuine BPCL-branded oils used',
      'Additional under-bonnet services available',
    ],
    location: 'Mumbai, Maharashtra',
  },
  
  12: {
    name: 'Lubricated Air Compressor (Optional)',
    image: product12,
    description: `This optional service for Lubricated Air Compressors complements the standard oil change service. It focuses on providing superior performance and transparency by allowing customers to witness the entire process. With the use of BPCL-branded oils and an array of additional services like coolant and oil level checks, this service aims to provide comprehensive maintenance for your air compressor system.`,
    specification: [
      'Convenience: Customers can observe the entire oil change process.',
      'Speed: Service is performed quickly to minimize downtime.',
      'Genuine Oil: Only BPCL-branded engine oils used for performance.',
      'Additional Services: May include coolant and oil level checks, and top-ups.',
    ],
    features: [
      'Full transparency during service for customer confidence',
      'Quick and efficient oil change service',
      'Use of BPCL-branded oils for high performance',
      'Optional additional services like coolant checks and top-ups',
    ],
  },
  

};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>Specification</h3>
      <ul>
        {product.specification.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Features</h3>
      <ul>
        {product.features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link to="/products" className="back-btn">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
