class CancelablePromise<T> extends Promise<T> {
  public cancel() {
    //
  }
}

export const cancelable = (promise: Promise<DriveMod>): CancelablePromise<DriveMod> => {
  let cancelled = false;

  const promiseObject = new CancelablePromise((res, rej) => {
    promise
      .then((data) => {
        if (!cancelled) {
          res(data);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          rej(err);
        }
      });
  }) as CancelablePromise<DriveMod>;
  promiseObject.cancel = (): void => {
    cancelled = true;
  };
  return promiseObject;
};
