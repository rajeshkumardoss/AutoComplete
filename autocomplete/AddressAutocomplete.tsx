import { Stack } from '@fluentui/react';
import * as React from 'react';
import axios from 'axios';
import Autocomplete, { ISuggestionItem } from './Autocomplete';

const API_KEY = 'YOUR_API_KEY';

export interface IAddressAutocompleteProps{
  name ? : string 
}
const heroes = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Hawkeye",
  "Black Panther",
  "Ant Man",
  "Spiderman",
];

// eslint-disable-next-line react/display-name
export const AddressAutocomplete =  React.memo((props: IAddressAutocompleteProps) => {
  
  const [suggestions, setSuggestions] = React.useState<string[]>();
  const onChange = (newText?: string) => {
    if (!newText || newText.trim() === "") {
      setSuggestions(undefined);
    } else {
      setSuggestions(
        heroes.filter((hero) =>
          hero.toLowerCase().includes(newText.toLowerCase())
        )
      );
    }
  };

  const onSuggestionClicked = (suggestion: string | ISuggestionItem) => {
    alert(
      typeof suggestion === "string" ? suggestion : suggestion.getSearchText()
    );
  };

  const queryThreshold = 3;
  const debounceTime = 500;
  const [inProgress, setProgress] = React.useState(false);
  const [dynamicSuggestions, setDynamicSuggestions] = React.useState<
    ISuggestionItem[]
  >();

  return (
    <Stack>
          <Stack tokens={{ childrenGap: 12 }}>
            <Stack horizontal verticalAlign="end" horizontalAlign="center">
              <Autocomplete
                className="search-box-try"
                onSuggestionClicked={onSuggestionClicked}
                onChange={(_, newValue) => {
                  onChange(newValue);
                }}
                suggestions={suggestions}
                inProgress={inProgress}
          debounceTime={debounceTime}
              ></Autocomplete>
            </Stack>
          </Stack>
        </Stack>
  );
});
