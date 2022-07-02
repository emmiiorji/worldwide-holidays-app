import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useState } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

const SelectYearPopup = ({ display, hidePopup, countrySelected }) => {
  const countries = useSelector((state) => state.countries);
  const [year, setYear] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    if (e instanceof moment) {
      setYear(e.format('YYYY'));
    }
  };

  return (
    <div className="popupOverlay" style={{ display }}>
      <div className="popupContainer">
        <FaTimes onClick={() => hidePopup()} className="closeBu" />
        {/* <div className="selectYearPopup"> */}
        <form className="selectYearPopup" onSubmit={handleShowHoliday}>
          <p>Select Year</p>
          <Datetime dateFormat="YYYY" timeFormat={false} closeOnSelect onChange={handleDateChange} />
          {/* <input type="date" id="year" onChange={handleChange} /> */}
          <input type="submit" value="See Holidays" />
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

SelectYearPopup.propTypes = {
  display: PropTypes.string.isRequired,
  hidePopup: PropTypes.func.isRequired,
  countrySelected: PropTypes.string.isRequired,
};

export default SelectYearPopup;
