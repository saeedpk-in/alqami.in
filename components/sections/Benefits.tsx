import React from "react";
import { TextAnimate } from "../magicui/text-animate";
import { Check } from "lucide-react";

const Benefits = () => {
  return (
    <section
      className="relatve py-16 md:py-24 bg-stone-50 overflow-hidden"
      id="product"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-emerald-800 uppercase bg-emerald-100/50 rounded-full mb-4">
            Key Benefits
          </span>
            <TextAnimate
              animation="blurInUp"
              by="word"
              once
              as={"h2"}
              delay={0.1}
              className="text-5xl md:text-6xl lg:text-7xl text-stone-800 tracking-tighter"
            >
             What You Gain.
            </TextAnimate>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Benefit 1 */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-emerald-600"/>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Tan Removal</h4>
                <p className="text-sm text-gray-600 mt-1">
                    Effectively removes tan for a brighter complexion
                </p>
              </div>
            </div>
            {/* Benefit 1 */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-emerald-600"/>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Cell Renewal</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Removes dead skin cells for fresher looking skin
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-emerald-600"/>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Acne Treatment</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Reduces acne and star marks for clearer skin
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-emerald-600"/>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Skin Texture</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Improves skin texture for a smoother complexion
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-emerald-600"/>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Exfoliation</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Gentle body scrubber removes impurities
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-emerald-600"/>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Scalp Care</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Reduces dandruff and scalp itchiness
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Benefits;
