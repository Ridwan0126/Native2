package com.project01;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "project01";
  }

  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   super.onCreate(null);
  // }

  // @Override
  // protected ReactActivityDelegate createReactActivityDelegate() {
  //   return new ReactActivityDelegate(this, getMainComponentName()) {
  //     @Override
  //     protected ReactRootView createRootView() {
  //      return new RNGestureHandlerEnabledRootView(MainActivity.this);
  //     }
  //   };
  // }
}
