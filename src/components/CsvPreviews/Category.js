import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { spreadsheetsValuesGet } from '../../actions/spreadsheetsValuesGet';
import ComboBox from '../../utils/ComboBox';

// import PinkPagination from '../../utils/Pagination';
import { Table, CategoryCell } from '../../styles/components';


const Category = ({ thisSpreadsheetId }) => {
  const dispatch = useDispatch();
  const sheet = useSelector((state) => state.sheetsReducer[thisSpreadsheetId]);
  const accessToken = useSelector((state) => state.oauthReducer.access_token);
  const [categoryDisplay, setCategoryDisplay] = useState('all');
  const newCategoryKey = useRef(0);


  function handleDisplayClick(num) {
    setCategoryDisplay(num);
  }

  useEffect(() => {
    if (!sheet) {
      dispatch(spreadsheetsValuesGet({ accessToken, thisSpreadsheetId }));
    }
  }, [dispatch, accessToken, thisSpreadsheetId, sheet]);

  const sheetItems = useMemo(() => sheet?.values || [], [sheet]);

  return (
    <div>
      <div className="displayOptions">
        <span className="displayText">Display: </span>

        <FormControl component="fieldset">

          <RadioGroup row aria-label="position" name="position" defaultValue="all">
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All"
              onChange={() => handleDisplayClick('all')}
              labelPlacement="top"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Uncategorized"
              onChange={() => handleDisplayClick(3)}
              labelPlacement="top"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="Categorized"
              onChange={() => handleDisplayClick(4)}
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>

      </div>
      <div className="tableDiv">
        <Table>
          <tbody>
            <tr><th>Date</th><th>Description</th><th>Amount</th><th>Category</th></tr>
            {sheetItems.map((row, i) => {
              if (i < 2) {
                return false;
              }
              if (categoryDisplay === 'all') {
                return (
                  <tr id={`row_${i}`} key={newCategoryKey.current++}>
                    {row.map((column, j) => {
                      if (j <= 2) {
                        return (
                          <CategoryCell
                            id={`row_${i}-column_${j}`}
                            key={newCategoryKey.current++}
                          >
                            {column}
                          </CategoryCell>
                        );
                      }
                      return false;
                    })}
                    <td>
                      <ComboBox
                        spreadsheetId={thisSpreadsheetId}
                        rowId={i}
                        rowLength={row.length}
                        categoryData={row[3]}
                      />
                    </td>
                  </tr>
                );
              } if (row.length === categoryDisplay) {
                return (
                  <tr id={`row_${i}`} key={newCategoryKey.current++}>
                    {row.map((column, j) => {
                      if (j <= 2) {
                        return (
                          <CategoryCell
                            id={`row_${i}-column_${j}`}
                            key={newCategoryKey.current++}
                          >
                            {column}
                          </CategoryCell>
                        );
                      }
                      return false;
                    })}
                    <td>
                      <ComboBox
                        spreadsheetId={thisSpreadsheetId}
                        rowId={i}
                        rowLength={row.length}
                        categoryData={row[3]}
                      />
                    </td>
                  </tr>
                );
              }
              return false;
            }
            )}
          </tbody>
        </Table>
      </div>
      {/* <PinkPagination /> */}
      <style>{
        `
        .displayOptions {
          padding-top: 8px;
          margin-bottom: 8px;
          border-top: 1px solid rgba(85, 85, 85, .7);
          border-bottom: 1px solid rgba(85, 85, 85, .7);
          text-align: center;
        }

        .displayText {
          position: relative;
          top: -3px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          color: #555555;
          padding-bottom: 9px;
        }

        .MuiAutocomplete-popper {
          width: 250px !important;
        }

        // .MuiInputBase-input { text-align: center; width: 100px;}
        // .MuiInput-input { text-align: center; width: 100px;}
        // .MuiAutocomplete-input { text-align: center; width: 100px;}
        // .MuiAutocomplete-inputFocused { text-align: center; width: 100px;}
        // .MuiInputBase-inputAdornedEnd { text-align: center; width: 100px;}

        .MuiFormLabel-root { text-align: center; width: 100px;}
        .MuiInputLabel-root { text-align: center; width: 100px;}
        .MuiInputLabel-formControl { text-align: center; width: 100px;}
        .MuiInputLabel-animated { text-align: center; width: 100px;}

        `
      }
      </style>


    </div>
  );
};

// class Category extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       categoryDisplay: 3,
//     };
//     newCategoryKey.current = 0;
//     this.handleDisplayClick = this.handleDisplayClick.bind(this);
//   }

//   componentDidMount() {
//     const { dispatch } = this.props;
//     const { accessToken } = this.props;
//     const { thisSpreadsheetId } = this.props;
//     const payload = {
//       accessToken,
//       thisSpreadsheetId,
//     };
//     dispatch(spreadsheetsValuesGet(payload));
//   }

//   handleDisplayClick(columns) {
//     this.setState({
//       categoryDisplay: columns,
//     });
//   }

//   csvReturn() {
//     let spreadsheetValues = [];
//     const { sheetsReducer } = this.props;
//     const { thisSpreadsheetId } = this.props;
//     if (sheetsReducer[thisSpreadsheetId]?.values) {
//       spreadsheetValues = sheetsReducer[thisSpreadsheetId].values;
//     } else {
//       // console.log("Warning Will Robinson and/or Noah");
//       // API CALL FOR VALUES NO IN REDUX WILL LIKELY REPLACE THESE..?:
//       spreadsheetValues = [
//         ['LoadingA', 'LoadingA', 'LoadingA'],
//         ['LoadingB', 'LoadingB', 'LoadingB', 'LoadingB'],
//         ['LoadingA', 'LoadingA', 'LoadingA'],
//         ['LoadingB', 'LoadingB', 'LoadingB', 'LoadingB'],
//         ['LoadingA', 'LoadingA', 'LoadingA'],
//         ['LoadingB', 'LoadingB', 'LoadingB', 'LoadingB'],
//       ];
//     }
//     console.count();
//     return (
//        <div
//         <Table>
//           <tbody>
//             <tr><th>Date</th><th>Description</th><th>Amount</th><th>Category</th></tr>
//             {spreadsheetValues.map((row, i) => {
//               if (i < 2) {
//                 return false;
//               }
//               const { categoryDisplay } = this.state;
//               if (categoryDisplay === 'all') {
//                 return (
//                   <tr id={`row_${i}`} key={this.newCategoryKey++}>
//                     {row.map((column, j) => {
//                       if (j <= 2) {
//                         return (
//                           <CategoryCell
//                             id={`row_${i}-column_${j}`}
//                             key={this.newCategoryKey++}
//                           >
//                             {column}
//                           </CategoryCell>
//                         );
//                       }
//                       return false;
//                     })}
//                     <td>
//                       <ComboBox
//                         spreadsheetId={thisSpreadsheetId}
//                         rowId={i}
//                         rowLength={row.length}
//                         categoryData={row[3]}
//                       />
//                     </td>
//                   </tr>
//                 );
//               } if (row.length === categoryDisplay) {
//                 return (
//                   <tr id={`row_${i}`} key={this.newCategoryKey++}>
//                     {row.map((column, j) => {
//                       if (j <= 2) {
//                         return (
//                           <CategoryCell
//                             id={`row_${i}-column_${j}`}
//                             key={this.newCategoryKey++}
//                           >
//                             {column}
//                           </CategoryCell>
//                         );
//                       }
//                       return false;
//                     })}
//                     <td>
//                       <ComboBox
//                         spreadsheetId={thisSpreadsheetId}
//                         rowId={i}
//                         rowLength={row.length}
//                         categoryData={row[3]}
//                       />
//                     </td>
//                   </tr>
//                 );
//               }
//               return false;
//             }
//             )}
//           </tbody>
//         </Table>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="displayOptions">
//           <span className="displayText">Display: </span>
//           <DisplayButton onClick={() => this.handleDisplayClick(3)}>Uncategorized</DisplayButton>
//           <DisplayButton onClick={() => this.handleDisplayClick(4)}>Categorized</DisplayButton>
//           <DisplayButton onClick={() => this.handleDisplayClick('all')}>All</DisplayButton>
//         </div>
//         {this.csvReturn()}

//         <PinkPagination />
//         <style>{
//           `
//           .displayOptions {
//             // position: relative;
//             // bottom: 60px;
//             margin: 8px;
//             text-align: center;
//           }
//           .displayText {
//             font-weight: 600;
//             color: #555555;
//           }
//           `
//         }
//         </style>


//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   csv: state.csvReducer.csvRawData,
//   sheetsReducer: state.sheetsReducer,
//   accessToken: state.oauthReducer.access_token,
// });

export default Category;
