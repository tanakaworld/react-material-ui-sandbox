import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import IntlPolyfill from 'intl';
const DateTimeFormat = IntlPolyfill.DateTimeFormat;
require('intl/locale-data/jsonp/ja');
require('intl/locale-data/jsonp/ja-JP');

export default class DatePickerSample extends Component {
    render() {
        return (
            <div>
                <DatePicker hintText="DatePicker(Default)"/>
                <DatePicker
                    hintText="DatePicker(JP)"
                    DateTimeFormat={DateTimeFormat}
                    okLabel="確認"
                    cancelLabel="キャンセル"
                    locale="ja"
                />
            </div>
        )
    }
}