import React from "react";
import {
  INIT_SAVE_NOTES_VALUE,
  SAVE_NOTES_VALUE_FAILED,
  SAVE_NOTES_VALUE_SUCCESSFULL,
} from "./actionType";

export function initSaveNotesValue(noteValue) {
  return {
    type: INIT_SAVE_NOTES_VALUE,
    noteValue,
  };
}
export function initSaveNotesSuccessfull(success) {
  return {
    type: SAVE_NOTES_VALUE_SUCCESSFULL,
    success,
  };
}

export function initSaveNotesFailed(failed) {
  return {
    type: SAVE_NOTES_VALUE_FAILED,
    failed,
  };
}
