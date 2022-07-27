import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';

const states = [
  {
    value: 'AA',
    label: 'AA',
  },
  {
    value: 'AE',
    label: 'AE',
  },
  {
    value: 'AL',
    label: 'ALABAMA',
  },
  {
    value: 'AK',
    label: 'ALASKA',
  },
  {
    value: 'AP',
    label: 'AP',
  },
  {
    value: 'AZ',
    label: 'ARIZONA',
  }, 
  {
    value: 'AR',
    label: 'ARKANSAS',
  },
  {
    value: 'CA',
    label: 'CALIFORNIA',
  }, 
  {
    value: 'CO',
    label: 'COLORADO',
  }, 
  {
    value: 'CT',
    label: 'CONNECTICUT',
  }, 
  {
    value: 'DE',
    label: 'DELAWARE',
  }, 
  {
    value: 'DC',
    label: 'DISTRICT OF COLUMBIA',
  }, 
  {
    value: 'FL',
    label: 'FLORIDA',
  }, 
  {
    value: 'GA',
    label: 'GEORGIA',
  }, 
  {
    value: 'HI',
    label: 'HAWAII',
  }, 
  {
    value: 'ID',
    label: 'IDAHO',
  }, 
  {
    value: 'IL',
    label: 'ILLINOIS',
  }, 
  {
    value: 'IN',
    label: 'INDIANA',
  }, 
  {
    value: 'IA',
    label: 'IOWA',
  }, 
  {
    value: 'KS',
    label: 'KANSAS',
  }, 
  {
    value: 'KY',
    label: 'KENTUCKY',
  }, 
  {
    value: 'LA',
    label: 'LOUISIANA',
  }, 
  {
    value: 'ME',
    label: 'MAINE',
  }, 
  {
    value: 'MD',
    label: 'MARYLAND',
  }, 
  {
    value: 'MA',
    label: 'MASSACHUSETTS',
  }, 
  {
    value: 'MI',
    label: 'MICHIGAN',
  }, 
  {
    value: 'MN',
    label: 'MINNESOTA',
  }, 
  {
    value: 'MS',
    label: 'MISSISSIPPI',
  }, 
  {
    value: 'MO',
    label: 'MISSOURI',
  }, 
  {
    value: 'MT',
    label: 'MONTANA',
  }, 
  {
    value: 'NE',
    label: 'NEBRASKA',
  }, 
  {
    value: 'NV',
    label: 'NEVADA',
  }, 
  {
    value: 'NH',
    label: 'NEW HAMPSHIRE',
  }, 
  {
    value: 'NJ',
    label: 'NEW JERSEY',
  }, 
  {
    value: 'NM',
    label: 'NEW MEXICO',
  }, 
  {
    value: 'NY',
    label: 'NEW YORK',
  }, 
  {
    value: 'NC',
    label: 'NORTH CAROLINA',
  }, 
  {
    value: 'ND',
    label: 'NORTH DAKOTA',
  }, 
  {
    value: 'OH',
    label: 'OHIO',
  }, 
  {
    value: 'OK',
    label: 'OKLAHOMA',
  }, 
  {
    value: 'OR',
    label: 'OREGON',
  }, 
  {
    value: 'PA',
    label: 'PENNSYLVANIA',
  }, 
  {
    value: 'PR',
    label: 'PUERTO RICO',
  }, 
  {
    value: 'RI',
    label: 'RHODE ISLAND',
  }, 
  {
    value: 'SC',
    label: 'SOUTH CAROLINA',
  }, 
  {
    value: 'SD',
    label: 'SOUTH DAKOTA',
  }, 
  {
    value: 'TN',
    label: 'TENNESSEE',
  }, 
  {
    value: 'TX',
    label: 'TEXAS',
  }, 
  {
    value: 'UT',
    label: 'UTAH',
  }, 
  {
    value: 'VT',
    label: 'VERMONT',
  }, 
  {
    value: 'VA',
    label: 'VIRGINIA',
  }, 
  {
    value: 'WA',
    label: 'WASHINGTON',
  },
  {
    value: 'WV',
    label: 'WEST VIRGINIA',
  },
  {
    value: 'WI',
    label: 'WISCONSIN',
  },
  {
    value: 'WY',
    label: 'WYOMING',
  },
];

export default function AddressForm() {
  const [state, setState] = React.useState('US');
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Place Order
      </Typography>
      <Grid container spacing={2}>
      <Grid item xs={8} sm={12}>
          <TextField
            disabled
            id="country"
            name="country"
            label="Location*"
            defaultValue="United States"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8} sm={12}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="phone-number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8} sm={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="shipping address-line"
            variant="outlined"
          />
        </Grid> 
        <Grid item xs={8} sm={6}>
        <TextField
          id="outlined-select-state-province"
          select
          required
          label="State/Province"
          value={state}
          onChange={handleChange}
          fullWidth
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={8} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
       
        <Grid item xs={8} sm={12}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox sx={{ color: grey[800],'&.Mui-checked': {color: grey[800], }, }} align= "left" name="saveAddress" value="yes" />} label="Make default"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}